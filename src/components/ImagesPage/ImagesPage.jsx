import { getImages } from 'servises/imagesApi';
import Button from 'react-bootstrap/Button';

import React, { Component } from 'react';

export default class ImagesPage extends Component {
  state = {
    images: [],
  };

  handleSearch = () => {
    getImages().then(data =>
      this.setState(prevState => {
        return { images: [...prevState.images, ...data.hits] };
      })
    );
  };

  render() {
    const { images } = this.state;
    return (
      <div>
        <Button variant="primary" type="button" onClick={this.handleSearch}>
          Search
        </Button>{' '}
        <ul>
          {images.map(image => {
            const { webformatURL, id, tags } = image;
            return (
              <li key={id} onClick={() => this.props.add(image)}>
                <img src={webformatURL} alt={tags} width="300" />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
