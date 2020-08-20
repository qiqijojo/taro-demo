import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import VirtualList from '@tarojs/components/virtual-list';

import './index.scss'

type PageStateProps = {
  store: {
    counterStore: {
      counter: number,
      increment: Function,
      decrement: Function,
      incrementAsync: Function
    }
  }
}

interface Index {
  props: PageStateProps;
}

@inject('store')
@observer
class Index extends Component {
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  increment = () => {
    const { counterStore } = this.props.store
    counterStore.increment()
  }

  decrement = () => {
    const { counterStore } = this.props.store
    counterStore.decrement()
  }

  incrementAsync = () => {
    const { counterStore } = this.props.store
    counterStore.incrementAsync()
  }

  Row = ({ data, index }) => {
    return <View className='list-item'>第{index}个</View>;
  };
  listData = [
    {id: 1},
    {id: 1},
    {id: 1},
    {id: 1},
    {id: 1},
    {id: 1},
    {id: 1},
    {id: 1},
    {id: 1},
    {id: 1},
    {id: 1},
    {id: 1},
    {id: 1}
  ]
  render () {
    const { counterStore: { counter } } = this.props.store
    return (
      <View className='index'>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter}</Text>
        <View
            className='list-box'
        >
          <VirtualList
              /* 列表的高度 */
              height={300}
              /* 列表的宽度 */
              width='100%'
              /* 渲染列表的数据 */
              itemData={this.listData}
              /*  渲染列表的长度 */
              itemCount={this.listData.length}
              /* 列表单项的高度  */
              itemSize={200}
          >
              {this.Row}
          </VirtualList>
        </View>
      </View>
    )
  }
}

export default Index
