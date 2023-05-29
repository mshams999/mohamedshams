import React, { Suspense } from 'react'
import { Flex, Box, Divider } from 'theme-ui'
import { PostTags } from '@widgets/Post/Post.Tags'

const PostShare = React.lazy(() => import('@widgets/Post/Post.Share'))

const styles = {
  flex: {
    alignItems: [`flex-start`, `center`],
    justifyContent: `space-between`,
    flexDirection: [`column`, `row`],
    '& > div + div': {
      mt: [3, 0],
      flexBasis: `1/2`,
      justifyContent: `flex-end`
    }
  }
}

export const PostTagsShare = props => (
  <Box>
    <Divider />
    <Flex sx={styles.flex}>
      <PostTags {...props} />
      <Suspense fallback={null}>
        <PostShare {...props} />
      </Suspense>
    </Flex>
  </Box>
)
