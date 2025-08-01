import { Outlet } from 'react-router-dom'
import { Container } from '@mantine/core'

export default function MainLayout() {
  return (
    <Container size="xl" style={{ padding: 0 }}>
      <Outlet />
    </Container>
  )
} 