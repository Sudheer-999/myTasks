import {TaskContainer, TaskName, TaskTag} from './styledComponents'

const TaskItem = props => {
  const {details} = props
  const {task, tag} = details

  return (
    <TaskContainer>
      <TaskName>{task}</TaskName>
      <TaskTag>{tag}</TaskTag>
    </TaskContainer>
  )
}

export default TaskItem
