import Git from 'simple-git'
import { BLOG_DIR, processFile } from './reading-time'

const git = Git()

async function calculateAndAddReadingTimes(): Promise<void> {
  try {
    const stagedFiles = (await git.diff(['--cached', '--name-only']))
      .split('\n')
      .map(i => i.trim())
      .filter(Boolean)

    const contentFiles = stagedFiles.filter(file =>
      file.startsWith(BLOG_DIR) &&
      (file.endsWith('.md') || file.endsWith('.mdx')),
    )

    if (contentFiles.length === 0) {
      console.log('No content files to process')
      return
    }

    console.log(`Found ${contentFiles.length} content file(s) to process`)

    for (const file of contentFiles) {
      await processFile(file)
      await git.add(file)
    }

    console.log('Finished processing all staged content files')
  } catch (error) {
    console.error('Error in calculateAndAddReadingTimes:', error)
  }
}

calculateAndAddReadingTimes()
