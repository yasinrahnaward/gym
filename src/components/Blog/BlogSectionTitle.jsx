import React from 'react'
import styled from 'styled-components'

const BlogSectionTitleStyle=styled.div`
.BlogSectionTitl
{
    
    border-bottom: 2px solid var(--deep-dark-1);

    p{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 1.5rem;
        padding:3px;
        width: fit-content;
        
    }
    hr{
        border: 1px solid var(--orange);
        width: 20%;
    }
}


`;
const BlogSectionTitle = (
    {
        text='Blog section title'
    }
) => {
  return (
    <BlogSectionTitleStyle>
        <div className="BlogSectionTitl">
        <p className='blogsectiontitle'>{text}</p>
        <hr></hr>
        </div>
    </BlogSectionTitleStyle>
  )
}

export default BlogSectionTitle