import { render, screen } from "@testing-library/react"
import { mocked } from "jest-mock"
import Post, { getServerSideProps } from "../../pages/posts/[slug]"
import { getPrismicCliente } from "../../services/prismic"

const post = { 
        slug: 'my-new-post', 
        title: 'My New Post', 
        content: '<p>Post excerpt</p>', 
        updatedAt: '10 de Março'
    }

jest.mock('../../services/prismic')

describe('Posts page', () => {
    it('renders correctly', () => {
        render(<Post post={post}/>)

        expect(screen.getByText("My New Post")).toBeInTheDocument()
        expect(screen.getByText("Post excerpt")).toBeInTheDocument()
    })

    // it('loads initial data', async () => {
    //     const getPrismicClientMocked = mocked(getPrismicCliente)

    //     getPrismicClientMocked.mockReturnValueOnce({
    //         query: jest.fn().mockResolvedValueOnce({
    //             results: [
    //                 {
    //                     uid: 'my-new-post',
    //                     data: {
    //                         title: [
    //                             { type: 'heading', text: 'My new post'}
    //                         ],
    //                         content: [
    //                             { type: 'paragraph', text: 'Post excerpt'}
    //                         ],
    //                     },
    //                     last_publication_date: '04-01-2023',
    //                 }
    //             ]
    //         }),
    //     } as any)

    //     const response = await getStaticProps({})
    //     expect(response).toEqual(
    //         expect.objectContaining({
    //             props: {
    //                 posts: [{
    //                     slug: 'my-new-post', 
    //                     title: 'My new post', 
    //                     excerpt: 'Post excerpt', 
    //                     updatedAt: '01 de abril de 2023'
    //                 }]
    //             }
    //         })
    //     )

    // })
})