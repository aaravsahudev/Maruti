@@ .. @@
     // Sample reviews
     const sampleReviews: Review[] = [
       {
         id: randomUUID(),
         customerName: "Rajesh Kumar",
         customerTitle: "Homeowner, Mumbai",
         rating: 5,
         reviewText: "Outstanding service from start to finish! The team was professional, and the installation was completed ahead of schedule. Our electricity bills have dropped by 85%. Highly recommended!",
         customerImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
         isApproved: true,
         createdAt: new Date()
       },
       {
         id: randomUUID(),
         customerName: "Priya Sharma",
         customerTitle: "CEO, Tech Solutions Pvt Ltd",
         rating: 5,
         reviewText: "Maruti Solar Solution helped us achieve our sustainability goals while significantly reducing operational costs. The ROI has exceeded our expectations. Excellent work!",
         customerImage: "https://images.unsplash.com/photo-1494790108755-2616b332c3c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
         isApproved: true,
         createdAt: new Date()
       },
       {
         id: randomUUID(),
         customerName: "Amit Patel",
         customerTitle: "Homeowner, Ahmedabad",
         rating: 5,
         reviewText: "The quality of panels and installation is top-notch. The monitoring system helps us track performance daily. Best investment we've made for our home. Thank you, Maruti Solar!",
         customerImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
         isApproved: true,
         createdAt: new Date()
+      },
+      {
+        id: randomUUID(),
+        customerName: "Sunita Verma",
+        customerTitle: "Homeowner, Indore",
+        rating: 5,
+        reviewText: "Amazing experience with Maruti Solar! They handled everything from permits to installation. Our monthly bill went from ₹8000 to just ₹800. Incredible savings!",
+        customerImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
+        isApproved: true,
+        createdAt: new Date()
+      },
+      {
+        id: randomUUID(),
+        customerName: "Vikram Singh",
+        customerTitle: "Factory Owner, Jaipur",
+        rating: 5,
+        reviewText: "Installed 100kW system for our manufacturing unit. The team was professional and completed the project on time. Saving ₹50,000 monthly on electricity!",
+        customerImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
+        isApproved: true,
+        createdAt: new Date()
+      },
+      {
+        id: randomUUID(),
+        customerName: "Meera Joshi",
+        customerTitle: "Homeowner, Pune",
+        rating: 5,
+        reviewText: "Excellent service and support! The solar panels are working perfectly even after 2 years. The app monitoring is very helpful. Highly satisfied with the investment.",
+        customerImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
+        isApproved: true,
+        createdAt: new Date()
       }
     ];