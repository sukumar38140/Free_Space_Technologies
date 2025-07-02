import React, { createContext, useContext, useState, useEffect } from 'react';

interface AdminUser {
  id: string;
  username: string;
  role: 'root' | 'admin';
  email: string;
}

interface AdminAuthContextType {
  currentUser: AdminUser | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  isRootAdmin: boolean;
}

const AdminAuthContext = createContext<AdminAuthContextType | null>(null);

// Predefined admin accounts (in production, this would be in a secure database)
const ADMIN_ACCOUNTS = [
  {
    id: '1',
    username: 'rootadmin',
    password: 'RootAdmin123!',
    role: 'root' as const,
    email: 'root@techcorp.com'
  },
  {
    id: '2',
    username: 'admin1',
    password: 'Kumar@12345',
    role: 'admin' as const,
    email: 'saatharlakumar@gmail.com'
  },
  {
    id: '3',
    username: 'admin2',
    password: 'Admin456!',
    role: 'admin' as const,
    email: 'admin2@techcorp.com'
  }
];

export const AdminAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);

  useEffect(() => {
    // Check if user is already logged in
    const savedUser = localStorage.getItem('adminUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    const account = ADMIN_ACCOUNTS.find(
      acc => acc.username === username && acc.password === password
    );

    if (account) {
      const user: AdminUser = {
        id: account.id,
        username: account.username,
        role: account.role,
        email: account.email
      };
      setCurrentUser(user);
      localStorage.setItem('adminUser', JSON.stringify(user));
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('adminUser');
  };

  const value = {
    currentUser,
    login,
    logout,
    isAuthenticated: !!currentUser,
    isRootAdmin: currentUser?.role === 'root'
  };

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within AdminAuthProvider');
  }
  return context;
};
