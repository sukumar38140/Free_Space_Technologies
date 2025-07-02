
# TechCorp Solutions - Modern Company Website

A comprehensive company website built with React, TypeScript, Bootstrap, and modern web technologies. Features a complete admin panel for content management and a responsive design that works across all devices.

## 🚀 Features

### Frontend
- **Modern Design**: Clean, professional UI with Bootstrap 5 and custom CSS
- **Responsive Layout**: Mobile-first design that works on all screen sizes
- **Smooth Animations**: CSS animations and transitions for better UX
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Loading**: Optimized images and efficient code structure

### Pages Included
- **Home**: Hero section, services preview, statistics, and call-to-action
- **Services**: Detailed service listings with pricing and features
- **About Us**: Company story, team members, and core values
- **Career**: Job listings with apply functionality
- **Contact**: Contact form with company information
- **Privacy Policy**: Comprehensive privacy policy
- **Terms of Service**: Legal terms and conditions
- **Admin Panel**: Full CRUD management for job posts

### Admin Features
- **Job Management**: Create, edit, and delete job postings
- **Real-time Updates**: Changes reflect immediately on the career page
- **User-friendly Interface**: Intuitive admin dashboard
- **Data Persistence**: Uses localStorage for demo (easily replaceable with API)

## 🛠️ Technologies Used

- **React 18** with TypeScript
- **React Router** for navigation
- **Bootstrap 5** with React Bootstrap components
- **Custom CSS** with modern animations and gradients
- **Font Awesome** for icons
- **Google Fonts** (Inter & Playfair Display)
- **Vite** for build tooling
- **ESLint** for code quality

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
```bash
git clone <repository-url>
cd techcorp-solutions
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to `http://localhost:8080`

### Production Build

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🗄️ Database Setup

### MySQL Database

1. **Import the database schema**
```bash
mysql -u your_username -p < database.sql
```

2. **Configure database connection**
Update your backend configuration with the following tables:
- `job_posts` - Career postings
- `contact_submissions` - Contact form data
- `newsletter_subscribers` - Email subscribers
- `admin_users` - Admin authentication
- `services` - Service listings
- `blog_posts` - Blog content (future)
- `projects` - Portfolio items (future)

### Environment Variables
Create a `.env` file in your backend:
```env
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=techcorp_solutions
JWT_SECRET=your_jwt_secret
```

## 🎨 Customization

### Colors & Branding
Update the CSS variables in `src/custom.css`:
```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  /* Add your brand colors */
}
```

### Company Information
Update company details in:
- `src/components/Navbar.tsx` - Company name
- `src/components/Footer.tsx` - Contact information
- `src/pages/Contact.tsx` - Office details
- `index.html` - Meta tags and title

### Images
Replace placeholder images with your own:
- Company logo
- Team photos
- Service illustrations
- Hero section images

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Admin Panel Usage

### Accessing Admin
Navigate to `/admin` to access the admin dashboard.

### Managing Jobs
1. Click "Add New Job" to create a posting
2. Fill in job details (title, department, location, etc.)
3. Click "Create Job" to publish
4. Edit or delete existing jobs using table actions

### Data Storage
Currently uses localStorage for demo purposes. For production:
1. Replace localStorage with API calls
2. Add authentication/authorization
3. Implement proper backend validation

## 🚀 Deployment Options

### Netlify/Vercel (Static)
1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Configure redirects for React Router

### Traditional Hosting
1. Build the project
2. Upload `dist` contents to web server
3. Configure web server for SPA routing

### Docker
```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 🔒 Security Considerations

### Production Checklist
- [ ] Replace localStorage with secure backend API
- [ ] Implement proper authentication
- [ ] Add CSRF protection
- [ ] Use HTTPS in production
- [ ] Sanitize user inputs
- [ ] Add rate limiting
- [ ] Implement proper error handling

## 📈 Performance Optimization

### Implemented
- Image optimization and lazy loading
- Code splitting with React.lazy()
- Efficient CSS with minimal unused styles
- Optimized bundle size

### Additional Recommendations
- CDN for static assets
- Service worker for caching
- Database query optimization
- Image compression and WebP format

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Create Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support or questions:
- Email: support@techcorp.com
- Phone: +1 (555) 123-4567
- Documentation: [Project Wiki]

## 🗺️ Roadmap

### Phase 1 (Current)
- [x] Basic website structure
- [x] Admin panel for jobs
- [x] Responsive design
- [x] Contact forms

### Phase 2 (Planned)
- [ ] User authentication
- [ ] Blog/News section
- [ ] Portfolio showcase
- [ ] Newsletter management
- [ ] Analytics integration

### Phase 3 (Future)
- [ ] Multi-language support
- [ ] Advanced SEO features
- [ ] Performance monitoring
- [ ] A/B testing capabilities

---

Built with ❤️ by TechCorp Solutions Team
```

## 🚀 Quick Deploy Guide

This project is ready to deploy! Here's what you get:

- **Complete company website** with all essential pages
- **Admin panel** for managing job posts
- **Responsive design** that works on all devices
- **Modern animations** and smooth user experience
- **Bootstrap integration** with custom styling
- **SQL database schema** ready for production

To deploy immediately:
1. Run `npm run build`
2. Upload the `dist` folder to your web server
3. Import `database.sql` to your MySQL database
4. Configure your backend API endpoints

The website includes everything a modern company needs: services showcase, team information, job listings, contact forms, and legal pages.
