import { setChatMessageFormatter } from '@padcom/chat-ui'

setChatMessageFormatter(source => JSON.stringify(source.content, null, 2))
