import React from 'react';
import Carousel from './carousel';
import Decks from './decks'
import '../App.css';
import Footer from './footer';
import News from './news';

function Home() {
    return (
        <div>
            
<Carousel />
<News />
<Decks />
<Footer/>

        </div>
    );
}

export default Home;