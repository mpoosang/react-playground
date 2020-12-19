import React, { Component } from 'react';

class Accordion extends Component {
  static defaultProps = {
    sections: []
  };

  state = {
    activeSectionIndex: null
  }

  handleActiveSection(sectionIndex) {
    this.setState({ activeSectionIndex: sectionIndex })
  }

  renderItem(section, index, activeSectionIndex) {
    return (
      <li className='Accordion_item' key={index}>
        <button onClick={() => this.handleActiveSection(index)}>
          {section.title}
        </button>
        {(activeSectionIndex === index) && <p>{section.content}</p>}
      </li>
    )
  }

  render() {
    const { activeSectionIndex } = this.state
    const { sections } = this.props
    return (
      <ul className='Accordion'>
        {sections.map((section, index) => 
          this.renderItem(section, index, activeSectionIndex)
        )}
      </ul>
    )
  }
}


export default Accordion;


// The Accordion component should accept a prop named sections.
// The sections prop should be an array of objects, each object should contain two keys, title, a string of the section's title and content, a string of the section's content.