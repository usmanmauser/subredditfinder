import React from 'react';

const GlobalStyles = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

    :root {
      --brand-orange: #D95F2A;
      --dark-navy: #1E2A3A;
      --dark-gray: #4A4A4A;
      --light-gray: #E0E0E0;
      --cream-bg: #F5F1E8;
      --off-black: #1A1A1A;
      --peach: #EADBCD;
      --almost-black: #2A2A2A;
      
      --background: var(--cream-bg);
      --foreground: var(--dark-navy);

      --card: #FFFFFF;
      --card-foreground: var(--dark-navy);
      
      --primary: var(--brand-orange);
      --primary-foreground: #FFFFFF;

      --secondary: var(--dark-navy);
      --secondary-foreground: #FFFFFF;
      
      --accent: var(--peach);
      --accent-foreground: var(--dark-navy);

      --border: var(--light-gray);
      --input: var(--light-gray);
      --ring: var(--brand-orange);
    }
    
    body {
      font-family: 'Inter', sans-serif;
      background-color: var(--background);
      color: var(--foreground);
    }
  `}</style>
);

export default function Layout({ children, currentPageName }) {
  return (
    <>
      <GlobalStyles />
      <div className="min-h-screen">
        {children}
      </div>
    </>
  );
}
