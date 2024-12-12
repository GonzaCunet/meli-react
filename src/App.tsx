import React from "react";
import { SearchForm } from "./SearchForm";
import { SearchResultItem } from "./SearchResultItem";

class App extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { results: [] };
  }
  render() {
    const handleSearch = async (search) => {
      const res = await fetch(
        "https://api.mercadolibre.com/sites/MLA/search?q=" + search
      );
      const data = await res.json();
      this.setState({ results: data.results });
    };
    console.log(this.state);
    return (
      <div>
        <SearchForm onSearch={handleSearch} />
        {this.state.results.map((r) => {
          return (
            <SearchResultItem
              title={r.title}
              price={r.price}
              thumbnail={r.thumbnail}
              key={r.id}
            />
          );
        })}
      </div>
    );
  }
}

export { App };
