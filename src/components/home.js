import React from 'react';
import Carousel from './carousel';
import Decks from './decks'
import '../App.css';
import Footer from './footer';

function Home() {
    return (
        <div>
            
<Carousel />
<Decks />
<Footer/>

        </div>
    );
}

export default Home;