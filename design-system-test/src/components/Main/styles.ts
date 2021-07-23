import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #f2f2f2;
  color: #424242;
  width: 100%;
  min-height: 100vh;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  width: 25rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const SubTitle = styled.h2`
  font-size: 1.5rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  width: 100%;
  max-width: 800px;
  margin: 24px 0;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex: 1;
`
