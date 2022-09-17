import React, { Component } from 'react';
import SelectBasicExample from './Select/Select';
import ImagesPage from './ImagesPage/ImagesPage';
import { FavoritePage } from './FavoritePage/FavoritePage';
import 'simplelightbox/dist/simple-lightbox.min.css';

class App extends Component {
  state = {
    favoriteImages: [],
    choicePage: '',
  };

  handlerChoice = ({ target: { value } }) => {
    this.setState({
      choicePage: value,
    });
  };

  handlerAddFavorite = img => {
    if (this.state.favoriteImages.find(item => item.id === img.id)) {
      alert('Такое фото уже есть');
      return;
    }
    this.setState({
      favoriteImages: [...this.state.favoriteImages, img],
    });
  };

  render() {
    return (
      <div>
        <SelectBasicExample onChange={this.handlerChoice} />
        {this.state.choicePage === 'images' && (
          <ImagesPage add={this.handlerAddFavorite} />
        )}
        {this.state.choicePage === 'favoriteImages' && (
          <FavoritePage images={this.state.favoriteImages} />
        )}
      </div>
    );
  }
}

export default App;

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       <SelectBasicExample />
//     </div>
//   );
// };
