export type Colleague = {
    firstName: string;
    lastName: string;
    imagePath: string;
    title: string;
    company: string;
    testimonial: string;
}

export default function TestimonialCard({ firstName, lastName, imagePath, testimonial, title, company }: Colleague) {
    return (
        <article className="flex h-full flex-col items-start border-2 border-black bg-slate-50 p-6 shadow-xs sm:p-8 lg:p-12">
            <img src={imagePath} alt={`${firstName} ${lastName}`} className="w-16 h-16 rounded-full mb-4" />
            <div className="mt-4">
                <p className="text-2xl font-bold sm:text-3xl">{`${firstName} ${lastName}`}</p>
                <blockquote>
                    <p className="mt-4 leading-relaxed text-gray-700">
                        {`"${testimonial}"`}
                    </p>
                </blockquote>
            </div>
            <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                &mdash; {title}, {company}
            </footer>
        </article>
    )
}
