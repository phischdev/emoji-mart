import React from 'react'
import PropTypes from 'prop-types'

export default class Anchors extends React.PureComponent {
  constructor(props) {
    super(props)

    let defaultCategory = props.categories.filter(
      (category) => category.first,
    )[0]

    this.state = {
      selected: defaultCategory.id,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    var index = e.currentTarget.getAttribute('data-index')
    var { categories, onAnchorClick } = this.props

    onAnchorClick(categories[index], index)
  }

  render() {
    var { categories, color, i18n, icons } = this.props,
      { selected } = this.state

    return (
      <nav className="emoji-mart-anchors" aria-label={i18n.categorieslabel}>
        {categories.map((category, i) => {
          var { id, anchor } = category,
            isSelected = id == selected

          if (anchor === false) {
            return null
          }

          const icon = icons.categories[id] || icons.defaultIcon;

          return (
            <button
              key={id}
              aria-label={i18n.categories[id]}
              title={i18n.categories[id]}
              data-index={i}
              type={'button'}
              onClick={this.handleClick}
              className={`emoji-mart-anchor ${
                isSelected ? 'emoji-mart-anchor-selected' : ''
                }`}
              style={{ color: isSelected ? color : null }}
            >
              <div className="emoji-mart-anchor-icon">
                {icon()}
              </div>
              <span
                className="emoji-mart-anchor-bar"
                style={{ backgroundColor: color }}
              />
            </button>
          )
        })}
      </nav>
    )
  }
}

Anchors.propTypes /* remove-proptypes */ = {
  categories: PropTypes.array,
  onAnchorClick: PropTypes.func,
  icons: PropTypes.object,
}

Anchors.defaultProps = {
  categories: [],
  onAnchorClick: () => {},
  icons: {},
}
