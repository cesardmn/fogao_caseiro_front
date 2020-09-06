import React from 'react'
import './styles.css'

interface TopPageProps {
  title: string;
  information: string
}

const TopPage: React.FC<TopPageProps> = (props) => {
  return (
    <div className="top-page">
      <h1 className="title" >{props.title}</h1>
      <h3 className="information" >{props.information}</h3>
    </div>
  )
}
export default TopPage