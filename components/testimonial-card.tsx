
interface TestimonialCardProps {
  name: string
  role: string
  content: string

}

export default function TestimonialCard({ name, role, content }: TestimonialCardProps) {
  return (
    <div className="px-4">
      <div className="bg-white rounded-lg  border border-blue-500 shadow-md p-6">
        <div className="flex items-center mb-4">
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-sm text-blue-500">{role}</p>
          </div>
        </div>
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  )
}

