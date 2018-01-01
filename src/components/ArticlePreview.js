import React from 'react'
import className from 'classnames'
import FontAwesome from 'react-fontawesome'

const ArticlePreview = (props) => {
    return (
        <div className={className("article article-preview", props.className)}>
            <a className="article-preview__img-wrapper" href="#">
                <img className="article-preview__img img-responsive el-center" src={require("../../assets/services/1.jpg")} alt={props.title} />
            </a>
            <h4 className="heading-underline text-red text-uppercase">{props.title}</h4>
            <p>{props.excerpt}</p>
            <a href="#" className="link-read-more">READ MORE <FontAwesome className="link-read-more__icon" name="chevron-right" /></a>
        </div>
    )
}

export default ArticlePreview