'use client'

const demandMarkets = [
  {
    group: 'Growth Problems',
    cards: [
      {
        problem: 'We post consistently but growth is slow',
        cause: 'Posting alone does not build memory. Without consistency across channels, your audience forgets you exist between posts.'
      },
      {
        problem: 'Competitors are growing faster',
        cause: 'They are not just more visible—they are more recognisable. Your brand is harder to recall when it matters most.'
      },
      {
        problem: 'Engagement dropped',
        cause: 'Inconsistent messaging and visual identity weaken recognition. People engage with what they recognise.'
      },
      {
        problem: 'Nothing is working',
        cause: 'Without a system for building memory, tactics feel random. Visibility without strategy fades fast.'
      }
    ]
  },
  {
    group: 'Conversion Problems',
    cards: [
      {
        problem: 'We get views but not customers',
        cause: 'Views without recognition do not convert. Buyers choose brands they remember and trust.'
      },
      {
        problem: 'Social media is not bringing business',
        cause: 'Your audience does not see you as their solution. Weak positioning makes discovery feel random.'
      },
      {
        problem: 'People engage but do not enquire',
        cause: 'Friction exists between awareness and action. Your contact details are hard to find or your offer is unclear.'
      }
    ]
  },
  {
    group: 'Weak Brand Presence',
    cards: [
      {
        problem: 'Our brand looks unprofessional',
        cause: 'Inconsistent visuals, messaging, and tone signal unreliability. Buyers hesitate when brands feel disorganised.'
      },
      {
        problem: 'Customers remember the content but not the company',
        cause: 'Your content is separated from your brand identity. Recognition requires both visibility AND clear ownership.'
      },
      {
        problem: 'Our pages look inconsistent',
        cause: 'Different profiles have different aesthetics, messaging, and positioning. This creates confusion, not memory.'
      }
    ]
  },
  {
    group: 'Operational Friction',
    cards: [
      {
        problem: 'No time for social media',
        cause: 'Without systems, social feels chaotic. You need structure that makes consistency easy.'
      },
      {
        problem: 'Content keeps falling off',
        cause: 'You post randomly instead of systematically. Memory requires ongoing presence, not sporadic activity.'
      },
      {
        problem: 'Agencies disappointed us',
        cause: 'They focused on output, not outcomes. You need visibility systems that actually build recognition.'
      },
      {
        problem: 'Freelancers were inconsistent',
        cause: 'Without a clear system, different people create different results. Consistency demands structure.'
      }
    ]
  },
  {
    group: 'Starting / Relaunching',
    cards: [
      {
        problem: 'Starting from zero',
        cause: 'You need visibility before you have reputation. Smart positioning makes new brands discoverable.'
      },
      {
        problem: 'Relaunching the brand',
        cause: 'Old perceptions linger. You need clear communication about who you are now and why it matters.'
      },
      {
        problem: 'Need visibility before launch',
        cause: 'Pre-launch momentum requires strategic positioning and systems ready to capture demand.'
      },
      {
        problem: 'Need to look credible online',
        cause: 'First impressions are permanent. Weak profiles lose buyers before they even engage.'
      }
    ]
  }
]

export default function DemandMarkets() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-phaneros-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-phaneros-black mb-6">
            Which of these sounds familiar?
          </h2>
          <p className="font-glacial text-lg text-phaneros-gray max-w-2xl mx-auto">
            These problems have one thing in common: weak recognition, inconsistent visibility, or missing systems.
          </p>
        </div>

        {/* Demand Market Groups */}
        <div className="space-y-16">
          {demandMarkets.map((market, idx) => (
            <div key={idx} className="animate-fade-up">
              <h3 className="font-cormorant text-3xl font-bold text-phaneros-black mb-8">
                {market.group}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {market.cards.map((card, cardIdx) => (
                  <div
                    key={cardIdx}
                    className="p-8 border border-phaneros-gray/20 hover:border-phaneros-bronze/40 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-gray-50"
                  >
                    <h4 className="font-glacial font-bold text-phaneros-black mb-4 text-lg">
                      {card.problem}
                    </h4>
                    <p className="font-glacial text-phaneros-gray leading-relaxed">
                      {card.cause}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
