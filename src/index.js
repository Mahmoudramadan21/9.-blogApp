import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { SidebarProvider } from './context/sidebarContext';
import { BlogsProvider } from './context/blogsContext';
import { UserProvider } from './context/userContext';
import { CommentProvider } from './context/commentContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SidebarProvider>
      <UserProvider>
        <BlogsProvider>
          <CommentProvider>
            <App />
          </CommentProvider>
        </BlogsProvider>
      </UserProvider>
    </SidebarProvider>
  </React.StrictMode>
);
