import Button from "@/components/button";
import { FaBeer } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="h-full flex justify-center items-center">
      <Button color="danger" />
      <Button color="danger" disabled />
      <Button color="danger" size="lg" startIcon={<FaBeer />} />
      <Button color="secondary" size="lg" startIcon={<FaBeer />} />
      <Button variant="outline" color="secondary" size="lg" startIcon={<FaBeer />} />
      <Button variant="outline" color="danger" size="lg" startIcon={<FaBeer />} />

    </div>
  )
}
