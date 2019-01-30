import { Component } from 'react';

class WithMeta extends Component {

  static metaKey = 'rndm-meta';

  constructor(props) {
    super(props);
    this.state = { ...this.props.meta };
  }

  componentDidMount() {
    this.processMeta();
  }

  componentWillReceiveProps(props) {
    if (JSON.stringify(props.meta) !== JSON.stringify(this.props.meta)) {
      this.setState({ ...props.meta }, this.processMeta);
    }
  }

  processMeta() {
    const { document } = global;
    if (document && typeof document.createElement === 'function') {
      Array.from(document.head.getElementsByClassName(WithMeta.metaKey)).forEach(child => child.parentNode.removeChild(child));
      Object.keys(this.state).forEach(name => {
        const content = this.state[name];
        const meta = document.createElement('meta');
        meta.name = name;
        meta.content = content;
        meta.className = WithMeta.metaKey;
        document.head.appendChild(meta);
      });
    }
  }

  render() {
    return this.props.children;
  }
}

module.exports = WithMeta;
