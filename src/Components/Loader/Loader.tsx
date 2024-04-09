import './loader.scss'

const Loader = ({wrapperClassName=''}: {wrapperClassName?: string}) => {
  return (
    <span className={`loader ${wrapperClassName}`}></span>
  )
}

export default Loader