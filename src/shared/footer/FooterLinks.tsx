interface FooterLinksProps {
  title: string;
  links: string[];
}

export default function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div>
      <h3 className="mb-8 text-[18px] font-semibold text-[#202020]">{title}</h3>

      <ul className="space-y-5">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="
                  text-[18px]
                  text-[#666]
                  transition-colors
                  hover:text-[#2F80ED]
                "
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
