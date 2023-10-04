import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
const dummyCardData = [
    {
        title: "Track Your Macros for a Healthy Lifestyle",
        description:
          "With Macros-Tracker, you can easily monitor your daily macronutrient intake. Whether you're looking to lose weight, gain muscle, or maintain a balanced diet, our app helps you achieve your health and fitness goals.",
      imageUrl: "https://images.prismic.io/cm-website/030dabe6-7bc1-4df7-953f-4ddf8c3f7a97_article-1%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
    },
    
    {
        title: "Discover Delicious Recipes",
        description:
          "Explore a wide range of delicious and nutritious recipes curated by our team of experts. From breakfast to dinner, we've got you covered with meals that satisfy your taste buds and keep you on track with your goals.",
      imageUrl: "https://images.prismic.io/cm-website/26adf515-88d3-46ff-b5c4-f73eb3c6c78f_article_3%402x.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
    },
    {
        title: "Stay Motivated with Our Community",
        description:
          "Join our vibrant community of health enthusiasts. Share your progress, get support, and stay motivated on your fitness journey. Together, we can achieve our goals and live a healthier life.",
      imageUrl: "https://images.prismic.io/cm-website/1b4d20a7-fd3b-42a0-ba35-cae306374b4a_article_2%402x.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
    }
    // Add more objects as needed
  ];
const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            {dummyCardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl} // Provide the image URL for each card
            />
          ))}   
            
            
        </>
    )
}

export default Home;