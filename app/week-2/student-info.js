import Link from 'next/link';

export default function StudentInfo()
{
    return (
        <main>
            <ul>
                <li>Linden Wright</li>
                <li><Link href="https://github.com/Reann-Shepard">GitHub Repository</Link></li>
            </ul>
        </main>
    );
}