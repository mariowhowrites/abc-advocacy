import { useId } from 'react'
import { type ImageProps } from 'next/image'

import pictureCheer from '@/images/cheer.webp'
import pictureHands from '@/images/hands.webp'
import pictureComputer from '@/images/computer.webp'

interface Feature {
    name: React.ReactNode
    summary: string
    description: string
    image: ImageProps['src']
    icon: React.ComponentType
}


const features: Array<Feature> = [
    {
        name: 'Consultation',
        summary: 'No More Confusing Jargon',
        description:
            'I will help you to understand the entire special education process, from the first SST to the development of an IEP that meets your child’s individual needs. I will work with you to ensure that together we are doing everything possible to provide your child an appropriate educational plan.',
        image: pictureHands,
        icon: function ReportingIcon() {
            let id = useId()
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
            )
        },
    },
    {
        name: 'Credentials',
        summary:
            'Excellence Through Experience',
        description:
            'With decades of experience in education and credentials including Special Education Credential, Resource Specialist Certificate, and a Master’s Degree in Special Education, I am uniquely qualified to help you navigate the special education system.',
        image: pictureCheer,
        icon: function InventoryIcon() {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>

            )
        },
    },
    {
        name: 'IEP Review',
        summary:
            'Prepare for the new school year with an IEP review',
        description:
            'Did you really understand the information shared with you at your child’s last IEP meeting? Are you sure your child is receiving the correct services? If you answered no to either of these questions, an IEP review may be helpful. ',
        image: pictureComputer,
        icon: function ContactsIcon() {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

            )
        },
    },
]

export default features;