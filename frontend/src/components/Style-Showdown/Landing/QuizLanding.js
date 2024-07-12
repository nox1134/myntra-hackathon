import React from 'react';

const sharedClasses = {
  primaryButton: 'bg-gradient-to-r from-purple-400 to-pink-600 text-primary-foreground px-6 py-3 rounded-full hover:from-purple-500 hover:to-pink-700',
  navLink: 'hover:text-foreground',
  roundedImage: 'rounded-full'
};

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center p-4 bg-black">
      <img src="https://placehold.co/100x50?text=Logo" alt="bia logo" className="h-10" />
      <nav className="flex space-x-8 text-muted-foreground">
        <a href="#" className={sharedClasses.navLink}>Product</a>
        <a href="#" className={sharedClasses.navLink}>Science</a>
        <a href="#" className={sharedClasses.navLink}>Articles</a>
        <a href="#" className={sharedClasses.navLink}>Status</a>
        <a href="#" className={`bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-primary/80 ${sharedClasses.navLink}`}>Order Now</a>
      </nav>
    </header>
  );
};

const Main = () => {
  return (
    <main className="flex flex-col items-center text-center mt-16">
      <p className="text-sm text-secondary-foreground mb-2">SLEEP CHRONOTYPE QUIZ</p>
      <h1 className="text-6xl font-bold mb-4">
        Discover Your <br />
        <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">Sleep Animal</span> <br />
        Today!
      </h1>
      <p className="text-muted-foreground mb-8">#1 Sleep Quiz Backed by Science</p>
      <button className={sharedClasses.primaryButton}>Take the Quiz</button>
      <div className="flex mt-8 space-x-4">
        <img src="https://placehold.co/50x50" alt="animal 1" className={sharedClasses.roundedImage} />
        <img src="https://placehold.co/50x50" alt="animal 2" className={sharedClasses.roundedImage} />
        <img src="https://placehold.co/50x50" alt="animal 3" className={sharedClasses.roundedImage} />
      </div>
    </main>
  );
};

const QuizLanding = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4">
      <Header />
      <Main />
    </div>
  );
};

export default QuizLanding;
