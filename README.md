# XYZ
## Notes
This is by no means a finished piece. I didn't want to spend more than the estimated time as I wasn't sure whether it was a hard limit. All in all this took roughly 4 hours. I think it would be rather ambitious to implement all the requirements in 2-3 hours. The only thing I am missing here is pagination, which I am perfectly capable of implementing, although as previously mentioned I didn't want to spend much more than the time recommended. Some of the filtering code ended up messier than I would've liked; I would use selectors to handle this if I were to rewrite it. 

### Main packages used:
- react-virtualised
- immer
- react-router
- recharts
- redux-saga
- styled components
- typesafe-actions

#### react-virtualised
I chose this package for the table implementation as when dealing with large quantities of data it is good to virtualise it and only load what is currently on display. This package is a little outdated and the maintainers no longer update it, so you may see a console warning about a deprecated method which stems from this.

#### immer
Immer is my go to when using redux. The ability to use a mutable draft representation of the store makes logic much more concise.

#### react-router
I used this to handle the navigation/multiple routes. 

#### recharts
I've never used this package before but i've read good things about it and it seems to offer powerful features. 

#### redux-saga
Although the stranger syntax due to generator functions can scare peopel away, once you have used sagas a couple of times it seems like the obvious choice for middleware. I used a saga to handle the autosuggest feature whereby I race 300ms vs the user typing, this means it does not dispatch an action on every keystroke to update the suggestions but waits until there is a 300ms delay (which suggests the user has paused typing).

#### styled-components 
My favourite package for handling styling. I haven't explored many alternatives but I enjoy the modular and separation it grants between components and styling (you'll see i follow an index/style file approach throughout. 

#### typesafe-actions
I frequently use this package as I enjoy the benefit of having a typesafe reducer. It helps prevent silly bugs and greatly increases my development time.


