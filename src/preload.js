const rules = require('./regulars')

const showList = rules.map((value) => ({
  title: value.title,
  description: `正则：${value.reg}\n\n   | 例如：${value.exp.join()}`,
  reg: value.reg + '',
}))

window.exports = {
  'use-reg': {
    mode: 'list',
    args: {
      enter: (action, callbackSetList) => {
        callbackSetList(showList)
      },
      search: (action, searchWord, callbackSetList) => {
        let filterArray
        if (searchWord) {
          filterArray = showList.filter(
            (value) =>
              value.title.toLowerCase().indexOf(searchWord.toLowerCase()) != -1
          )
        } else {
          filterArray = showList
        }
        callbackSetList(filterArray)
      },
      select: (action, itemData, callbackSetList) => {
        utools.hideMainWindow()
        utools.copyText(itemData.reg)
        utools.outPlugin()
      },
      placeholder: '搜索，Enter复制正则'
    }
  }
}