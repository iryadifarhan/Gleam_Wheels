export const Pricing = (props: {level: number, amountStars: number}) => {
    const prices = new Array(props.level).fill('$')
    const left = new Array(props.amountStars-props.level).fill('$')

    return (
        <div className="tracking-wide">
          {prices.map((dollar, index) => (<span className="text-slate-900 font-bold" key={index}>{dollar}</span>))}
          {left.map((dollar, index) => (<span key={index} className="text-white/70">{dollar}</span>))}
        </div>
      );
}