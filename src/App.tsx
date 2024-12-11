import React from "react";
import { SearchForm } from "./SearchForm";
import { SearchResultItem } from "./SearchResultItem";

class App extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }
  render() {
    const handleSearch = () => {};
    return (
      <div>
        <SearchForm onSearch={handleSearch}></SearchForm>
        <SearchResultItem></SearchResultItem>
      </div>
    );
  }
}

export { App };
