export default ({ children, style }) => (
  <div className='section-title' style={style}>
    <h3>{children}</h3>
    <style jsx>{`
      div {
        text-align: center;
        margin: 3rem 0;
      }
      h3 {
        display: inline-block;
        font-size: 40px;
        line-height: 1.4em;
        color: #000;
        position: relative;
      }
      .h3:after {
        content: '';
        display: block;
        position: absolute;
        right: -0.3em;
        bottom: -0.4em;
        height: 0.5em;
        width: 90%;
        opacity: 0.3;
        background-color: #69cbee;
      }

      @media (max-width: 600px) {
        h3 { font-size: 36px }
      }
    `}</style>
  </div>
)
