import './project.css'

const ProjectItem = props => {
  const {projectdetails, updateScore} = props
  const {thumbnailUrl} = projectdetails

  const onClickimage = () => {
    updateScore(thumbnailUrl)
  }

  return (
    <div className="project">
      <button onClick={onClickimage} type="button" className="button-image">
        <img className="project-image" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </div>
  )
}

export default ProjectItem
