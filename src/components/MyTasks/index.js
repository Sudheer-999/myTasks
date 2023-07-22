import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'
import {
  BgContainer,
  LeftSection,
  Head,
  Label,
  NoView,
  TaskInput,
  TagsInput,
  TagItems,
  NoTasksDisplay,
  Output,
  TagOption,
  AddButton,
  RightSection,
  THead,
} from './styledComponents'

import TagButtonItem from '../TagButtonItem'
import TaskItem from '../TaskItem'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class MyTasks extends Component {
  state = {
    taskInput: '',
    tagInput: tagsList[0].optionId,
    tasksList: [],
    activeTag: '',
  }

  onTask = event => {
    this.setState({taskInput: event.target.value})
  }

  onTag = event => {
    this.setState({tagInput: event.target.value})
  }

  onTagButton = id => {
    this.setState({activeTag: id})
  }

  renderNoTasks = () => (
    <NoView>
      <NoTasksDisplay>No Tasks Added Yet</NoTasksDisplay>
    </NoView>
  )

  onAddBtn = event => {
    event.preventDefault()
    const {taskInput, tagInput} = this.state
    const tagreal = tagsList.find(each => each.optionId === tagInput)
    const newTask = {task: taskInput, tag: tagreal.displayText, id: uuidv4()}

    this.setState(prevState => ({
      tasksList: [...prevState.tasksList, newTask],
      taskInput: '',
      tagInput: tagsList[0].optionId,
    }))
  }

  render() {
    const {taskInput, tasksList, activeTag} = this.state

    const filteredItems = tasksList.filter(
      eachItem => eachItem.tag === activeTag,
    )

    const tasksItemsList = activeTag.length < 1 ? tasksList : filteredItems

    return (
      <BgContainer>
        <LeftSection onSubmit={this.onAddBtn}>
          <Head>Create a task!</Head>
          <Label htmlFor="taskInput">Task</Label>
          <TaskInput
            type="text"
            onChange={this.onTask}
            value={taskInput}
            placeholder="Enter the task here"
            id="taskInput"
          />
          <Label htmlFor="tagInput">Tags</Label>
          <TagsInput onChange={this.onTag} id="tagInput" selected>
            {tagsList.map(eachItem => (
              <TagOption value={eachItem.optionId} key={eachItem.optionId}>
                {eachItem.displayText}
              </TagOption>
            ))}
          </TagsInput>
          <AddButton type="submit">Add Task</AddButton>
        </LeftSection>
        <RightSection>
          <THead>Tags</THead>
          <TagItems>
            {tagsList.map(eachItem => (
              <TagButtonItem
                details={eachItem}
                id={eachItem.optionId}
                key={eachItem.optionId}
                isActive={activeTag === eachItem.displayText}
                onTagButton={this.onTagButton}
              />
            ))}
          </TagItems>
          <THead>Tasks</THead>
          <Output>
            {tasksItemsList.length < 1
              ? this.renderNoTasks()
              : tasksItemsList.map(eachItem => (
                  <TaskItem details={eachItem} key={eachItem.id} />
                ))}
          </Output>
        </RightSection>
      </BgContainer>
    )
  }
}

export default MyTasks
