class HeaderTitle extends React.Component {
  state = {
    message: "Welcome Message"
  };

  onclick = () => {
    this.setState({ message: "Have a Good Time!" });
  }

  render() {
    return (
      <div onClick={this.onclick}>
        {this.state.message}
      </div>
    );
  }
}

const headerTitle = document.getElementById("headerTitle");
ReactDOM.render(<HeaderTitle />, headerTitle);


const LoadMoreBtn = (props) => {
  return (
    <div className="loadMoreBtn" onClick={props.onClick}>
      Call to Action
    </div>
  );
}

const Part2 = (props) => {
  const contentBoxes = [5, 6, 7, 8];

  const contentElements = contentBoxes.map((boxNumber) => (
    <div key={boxNumber} className="allContentBox">
      <div>Content Box {boxNumber}</div>
    </div>
  ));

  return (
    <div id="part2" className="allPart" style={props.style}>
      {contentElements}
    </div>
  );
}


class Section2 extends React.Component {
  state = {
    style: {display: "none"}
  };
  
  loadMore = () => {
      this.setState({
        style: {display: "grid"}
      });
    }

  render() {
    return (
      <section id="section2">
        <LoadMoreBtn onClick={this.loadMore} />
        <Part2 style={this.state.style}/>
      </section>
    );
  }
}

ReactDOM.render(<Section2 />, document.getElementById("section2Container"));


