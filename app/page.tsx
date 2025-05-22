import Link from "next/link"
import Image from "next/image"
import { ExternalLink, BookOpen, Twitter, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  const works = [
    {
      id: "6036",
      title: "SHADOW CODE",
      url: "https://mdms.jp/scenarios/6036",
      description: "西暦2324年、未来都市エクリプスシティを舞台にしたSF系マーダーミステリー",
      date: "2024/08/17",
      genre: "マーダーミステリー",
      tags: [
        "ウズ限定",
        "運営イチオシ",
        "SF",
        "駆け引きが楽しい",
        "なりきって楽しい",
        "重厚",
        "解説が充実",
        "BGM･SE付き",
        "ウズアワード受賞作",
      ],
      price: "350コインセール中（4/1から490コイン）",
      awards: ["2024下半期ウズアワード 戦略性部門", "2024下半期ウズアワード 好き部門"],
      synopsis:
        "西暦2324年、未来都市エクリプスシティでは、全ての市民が頭に装着したICチップを通じてシティAI「NOVA」と交信している。日常の1部となったこの技術により、人々は思考だけで車を操ったり、義手を動かしたり、生活を便利にしている。しかし、この進歩の裏には暗く深い闇が隠されている。\n\nある夜、宿で鳴り響く大きな警報音。この音に導かれて4人はある部屋の前に集まる。部屋の中では、ベッドの上で生気を失った男が固まっている。レオンがその男の生死を確認すると、彼は既に息を引き取っていた。\n\nこの死は、ただの事故ではない。4人は、街の表と裏をつなぐ影を解き明かしていく。",
      characters: [
        { name: "レオン・サイダス", age: "35歳", gender: "男性", occupation: "私立探偵" },
        { name: "エミリア・ケイン", age: "32歳", gender: "女性", occupation: "研究者" },
        { name: "マイラ", age: "24歳", gender: "女性", occupation: "発明家" },
        { name: "ジェイ・レイヴン", age: "52歳", gender: "男性", occupation: "ーー" },
        { name: "NOVA", age: "ーー", gender: "ーー", occupation: "シティAI" },
      ],
      features: [
        "オープン型マーダーミステリ―です。",
        "初級＆中級＆上級から選択できます。",
        "駆け引きを重視したシナリオです。",
        "明確な推理導線はありません。",
        "RP重視のシナリオです。",
        "時間はあくまでも目安です。±30分と思ってください。",
      ],
      authorComment:
        "作者GMは現在受け付けておりません。公認GMや講習済みGMを紹介させていただくことは出来ます。GMにお困りの際はご相談ください。\n\n初作品です。UZUならこんなことも出来るんじゃ！を詰め込みました。そのため、操作難易度が高めです。その代わりとして、最初に練習にスタンガンを配布しています。試しに人に当てたり、自分に使ってみてください。\n\nこのシナリオでは、PCを作者が殺しに行きます。全力で護ってください。",
    },
    {
      id: "8056",
      title: "JILVAIN-ジルヴェイン-",
      url: "https://mdms.jp/scenarios/8056",
      description: "嵐に包まれた禁断の島「オニロ島」を舞台にしたファンタジー系マーダーミステリー",
      date: "2025/02/18",
      genre: "マーダーミステリー",
      tags: ["ウズ限定", "ファンタジー", "駆け引きが楽しい", "トリッキー", "重厚", "解説が充実", "BGM･SE付き"],
      price: "~3/31 350コイン",
      features: ["犯人はPCの中にいる", "密談あり", "分岐多数", "推理＝RP", "ZIRCONの知識は全く必要ありません。"],
      synopsis:
        "遥か昔から、忌み嫌われ、また畏敬される場所――それが「オニロ島」。伝えられるところによれば、1度足を踏み入れた者は、2度と帰ってくることの出来ない、禁断の島である。\n\nある日、不意にその島の周囲を、狂気を孕むかのような嵐が取り巻いた。嵐は収まることなく、日に日にその勢いを増し、国「フリーダム」へも未曾有の自然災害をもたらす。この危機を前に、勇気ある者たちが次々と調査隊として派遣されたが、誰一人として帰還を許されなかった。\n\nそして、数多の犠牲の中で、ただ1人――ジーンだけが、帰ってきたのだ。「オニロ島に、すべての元凶がある。それを壊せば、我々は救われる……」ジーンの一言で、再び調査隊が結成された。\n\nあなた達は調査隊としてオニロ島を目指す。果たして島にたどり着くことは出来るのか。嵐を止められるのか。",
      characters: [
        {
          name: "イザベラ",
          description:
            "※犯人ではない\n母を探すために船に乗った。\n「そんなに死にたいならあたしが代わりに2人とも殺してあげようか？」",
        },
        {
          name: "クロバット",
          description: "父を探すために船に乗った。\n「……大丈夫。これからアイが、みんなを守っていくからね……！」",
        },
        {
          name: "ティトー",
          description:
            "死者の声を聞くために船に乗った。\n「世界を恨みながら死ぬなんて！なんて愚かで、おかしみのある人生だろう。」",
        },
        {
          name: "ソラ",
          description:
            "幼馴染を探すために船に乗った。\n「前の調査隊が死んだかなんて分からないだろ？私は生きている可能性を信じている。」",
        },
        {
          name: "ディバス",
          description:
            "借りを返すために船に乗った。\n「絶対についていくからね！ あーしはアンタに借りがある！ それを返すためにアンタに協力するんだから。」",
        },
      ],
      authorComment:
        "制作者:MARU\n4作品目となります。\nMARUらしい、UZUだからこそ体験できるギミックを盛り込むとともに、SHADOW CODEでの反省点を改善できたと感じています。\n今回は、1人ではなく🍬さんにイラストを、HOをユーマさんに作成していただきました。どちらも自分には作ることが出来無いものです。\nSHADOW CODEを楽しんでくださった方に、また楽しさ、面白さをじーんそくにお届けできることを願っております。",
      collaborators: [
        { role: "キャラクターイラスト", name: "🍬" },
        { role: "HO制作", name: "ユーマ" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="sticky top-0 z-40 w-full border-b border-gray-700 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/maru-icon.svg"
                alt="MARU Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                MARU
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#works" className="text-sm font-medium transition-colors hover:text-cyan-400">
              作品
            </Link>
            <Link href="#profile" className="text-sm font-medium transition-colors hover:text-cyan-400">
              プロフィール
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-cyan-400">
              お問い合わせ
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Link href="https://x.com/mok4shiro" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">X (Twitter)</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container py-10">
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 animate-gradient">
                  MARU
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">マーダーミステリー作家</p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <div className="flex justify-center">
                  <Link href="https://x.com/mok4shiro" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-1 border-cyan-700 hover:bg-cyan-900/20">
                      <Twitter className="h-4 w-4" />
                      <span>X (Twitter)</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="works" className="py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                  作品
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">マーダーミステリー作品一覧</p>
              </div>
            </div>

            <div className="mt-12 space-y-12">
              {works.map((work) => (
                <Card key={work.id} className="overflow-hidden bg-gray-800/50 border-gray-700 text-white">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                          {work.title}
                        </CardTitle>
                        <CardDescription className="text-gray-400 flex items-center mt-1">
                          <Calendar className="h-4 w-4 mr-1" /> {work.date} 公開
                        </CardDescription>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {work.tags &&
                          work.tags.map((tag, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="bg-gray-700 hover:bg-gray-600 text-gray-200"
                            >
                              {tag}
                            </Badge>
                          ))}
                      </div>
                    </div>
                    {work.price && <div className="mt-2 text-cyan-400 font-medium">{work.price}</div>}
                  </CardHeader>

                  <CardContent className="pb-6">
                    <Tabs defaultValue="synopsis" className="w-full">
                      <TabsList className="grid grid-cols-4 mb-6 bg-gray-700/50">
                        <TabsTrigger value="synopsis">あらすじ</TabsTrigger>
                        <TabsTrigger value="characters">キャラクター</TabsTrigger>
                        <TabsTrigger value="features">特徴</TabsTrigger>
                        <TabsTrigger value="comments">制作者コメント</TabsTrigger>
                      </TabsList>

                      <TabsContent value="synopsis" className="mt-0">
                        <div className="space-y-4">
                          <p className="text-gray-300 whitespace-pre-line">{work.synopsis}</p>
                        </div>
                      </TabsContent>

                      <TabsContent value="characters" className="mt-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {work.characters &&
                            work.characters.map((character, index) => (
                              <div key={index} className="bg-gray-700/30 p-4 rounded-lg">
                                <h4 className="font-bold text-lg text-cyan-400">{character.name}</h4>
                                {character.age && character.gender && character.occupation ? (
                                  <div className="text-sm text-gray-300 mt-1">
                                    <p>
                                      {character.age} / {character.gender}
                                    </p>
                                    <p>職業: {character.occupation}</p>
                                  </div>
                                ) : (
                                  <p className="text-sm text-gray-300 mt-1 whitespace-pre-line">
                                    {character.description}
                                  </p>
                                )}
                              </div>
                            ))}
                        </div>
                      </TabsContent>

                      <TabsContent value="features" className="mt-0">
                        <div className="space-y-2">
                          <ul className="list-disc list-inside text-gray-300 space-y-1">
                            {work.features && work.features.map((feature, index) => <li key={index}>{feature}</li>)}
                          </ul>

                          {work.awards && work.awards.length > 0 && (
                            <div className="mt-6">
                              <h4 className="font-bold text-lg text-cyan-400 mb-2">受賞歴</h4>
                              <ul className="list-disc list-inside text-gray-300 space-y-1">
                                {work.awards.map((award, index) => (
                                  <li key={index}>{award}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {work.collaborators && work.collaborators.length > 0 && (
                            <div className="mt-6">
                              <h4 className="font-bold text-lg text-cyan-400 mb-2">制作協力</h4>
                              <ul className="list-disc list-inside text-gray-300 space-y-1">
                                {work.collaborators.map((collab, index) => (
                                  <li key={index}>
                                    {collab.role}: {collab.name}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </TabsContent>

                      <TabsContent value="comments" className="mt-0">
                        <div className="space-y-4">
                          <p className="text-gray-300 whitespace-pre-line">{work.authorComment}</p>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>

                  <CardFooter className="border-t border-gray-700 pt-6 pb-4">
                    <Link href={work.url} target="_blank" rel="noopener noreferrer">
                      <Button className="gap-1 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500">
                        <BookOpen className="h-4 w-4" />
                        <span>マダミス.jpで見る</span>
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="profile" className="py-12 bg-gray-800/30 rounded-lg my-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                    プロフィール
                  </h2>
                  <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    MARUはマーダーミステリー作家として活動しています。SF、ファンタジーなどの世界観を持つ作品を制作し、「SHADOW
                    CODE」ではウズアワード戦略性部門と好き部門を受賞。UZUの特性を活かした独自のギミックと緻密なストーリー展開が特徴です。
                  </p>
                  <div className="pt-4">
                    <h3 className="text-xl font-semibold text-cyan-400 mb-2">作品の特徴</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      <li>駆け引きを重視したシナリオ設計</li>
                      <li>SF・ファンタジー世界観</li>
                      <li>UZUならではのギミックの活用</li>
                      <li>複数の難易度設定（初級・中級・上級）</li>
                      <li>重厚なストーリーテリング</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Link href="https://x.com/mok4shiro" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-1 border-cyan-700 hover:bg-cyan-900/20">
                      <Twitter className="h-4 w-4" />
                      <span>X (Twitter)</span>
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last">
                <div className="w-full h-full bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-xl flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mb-4">
                      <span className="text-3xl font-bold">M</span>
                    </div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                      MARU
                    </h3>
                    <p className="text-gray-400 mt-2">マーダーミステリー作家</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                  お問い合わせ
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  お仕事のご依頼やご質問などはXのDMにてお願いいたします。
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <div className="flex justify-center">
                  <Link href="https://x.com/mok4shiro" target="_blank" rel="noopener noreferrer">
                    <Button className="gap-1 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500">
                      <Twitter className="h-4 w-4" />
                      <span>Xでメッセージを送る</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-700 bg-gray-900">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-gray-400 md:text-left">
              &copy; {new Date().getFullYear()} MARU. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
