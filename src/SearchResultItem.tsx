// Importamos React
import React from "react";

class SearchResultItem extends React.Component<any, any> {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.price}</h2>
        <img src={this.props.thumbnail} alt="" />
      </div>
    );
  }
}
export { SearchResultItem };
