import { Link } from 'gatsby'
import React from 'react'
import { cn, buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import Icon from './icons'

import styles from './project-preview.module.css'
import { responsiveTitle1 } from './typography.module.css'

function ProjectPreview (props) {
  return (
    <Link className={styles.root} to={`/project/${props.slug.current}`}>
      <div className={styles.leadMediaThumb}>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </div>
      <h2 className={cn(responsiveTitle1, styles.title)}>{props.title}</h2>
      <div className={styles.seeMoreLinks}>
        <Icon className={styles.arrow} symbol='arrowRight' /> See Project Details
      </div>
    </Link>
  )
}

export default ProjectPreview
