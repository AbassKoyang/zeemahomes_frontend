'use client';
import {useState} from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import axios from 'axios'
import { HugeiconsIcon } from '@hugeicons/react'
import { Loading } from '@hugeicons/core-free-icons'
import { toast } from 'sonner';

const ContactUsForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleFormSubmit = async (e:React.FormEvent) => {
      e.preventDefault()
      setIsSubmitting(true)
      try{
        if (!name || !email || !message) {
          toast.error('Please fill in all fields!')
          return
        }
        await axios.post('http://localhost:3000/api/contact', {name, email, message})
        toast.success('Form submitted successfully!')
        setName('')
        setEmail('')
        setMessage('')
      }catch(error){
        console.error(error)
        toast.error('Failed to submit form.')
      }finally{
        setIsSubmitting(false)
      }
    }
  return (
    <form onSubmit={handleFormSubmit} className='mt-[30px] w-full'>
        <Input value={name} onChange={(e) => setName(e.target.value)} className='w-full border-border rounded-[10px] h-[50px]' placeholder='Name' />
        <Input value={email} onChange={(e) => setEmail(e.target.value)} className='w-full border-border rounded-[10px] h-[50px] mt-[20px]' placeholder='Email' />
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Tell us about your dream home' className='w-full border outline-0 stroke-0 border-border rounded-[10px] h-[150px] mt-[20px] p-2'>
        </textarea>

        <Button 
            className="mt-[30px] w-full bg-primary hover:bg-primary/90 text-white h-12 lg:h-16 px-5 lg:px-10 rounded-[6px] text-sm lg:text-lg font-semibold group transition-all shadow-lg shadow-primary/20 font-lato"
            >
              {isSubmitting? (
                <HugeiconsIcon icon={Loading} className="w-4 h-4 animate-spin" />
              ):(
                'Submit Now'
              )}
        </Button>
    </form>
  )
}

export default ContactUsForm