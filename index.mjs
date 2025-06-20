import { setChatMessageFormatter } from '@padcom/chat-ui'

setChatMessageFormatter(source => JSON.stringify(source, null, 2))
