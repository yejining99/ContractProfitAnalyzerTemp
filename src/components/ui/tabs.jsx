// import * as React from "react"

// const Tabs = React.forwardRef(({ className, ...props }, ref) => (
//   <div ref={ref} className={`${className}`} {...props} />
// ))
// Tabs.displayName = "Tabs"

// const TabsList = React.forwardRef(({ className, ...props }, ref) => (
//   <div ref={ref} className={`flex space-x-2 ${className}`} {...props} />
// ))
// TabsList.displayName = "TabsList"

// const TabsTrigger = React.forwardRef(({ className, active, ...props }, ref) => (
//   <button
//     ref={ref}
//     className={`px-3 py-1.5 text-sm font-medium transition-all 
//       ${active ? 'bg-white text-foreground shadow-sm' : 'text-muted-foreground'} 
//       ${className}`}
//     {...props}
//   />
// ))
// TabsTrigger.displayName = "TabsTrigger"

// const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={`mt-2 ${className}`}
//     {...props}
//   />
// ))
// TabsContent.displayName = "TabsContent"

// export { Tabs, TabsList, TabsTrigger, TabsContent }

import * as React from "react";
import { useState } from 'react';

const TabsContext = React.createContext({ value: "", setValue: () => {} });

const Tabs = React.forwardRef(({ defaultValue, children, className, ...props }, ref) => {
  const [value, setValue] = useState(defaultValue);
  
  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div ref={ref} className={className} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
});

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={`flex space-x-2 ${className}`} {...props} />
));

const TabsTrigger = React.forwardRef(({ value, children, className, ...props }, ref) => {
  const context = React.useContext(TabsContext);
  const isActive = context.value === value;
  
  return (
    <button
      ref={ref}
      className={`px-3 py-1.5 text-sm font-medium transition-all 
        ${isActive ? 'bg-white text-foreground shadow-sm' : 'text-muted-foreground'} 
        ${className}`}
      onClick={() => context.setValue(value)}
      {...props}
    >
      {children}
    </button>
  );
});

const TabsContent = React.forwardRef(({ value, children, className, ...props }, ref) => {
  const context = React.useContext(TabsContext);
  if (context.value !== value) return null;
  
  return (
    <div ref={ref} className={`mt-2 ${className}`} {...props}>
      {children}
    </div>
  );
});

Tabs.displayName = "Tabs";
TabsList.displayName = "TabsList";
TabsTrigger.displayName = "TabsTrigger";
TabsContent.displayName = "TabsContent";

export { Tabs, TabsList, TabsTrigger, TabsContent };