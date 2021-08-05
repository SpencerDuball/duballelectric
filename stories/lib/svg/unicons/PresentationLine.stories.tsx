import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { PresentationLine, PresentationLinePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/PresentationLine",
  component: PresentationLine,
} as ComponentMeta<typeof PresentationLine>;

const Template: ComponentStory<typeof PresentationLine> = (
  args: PresentationLinePropsI
) => (
  <x.div display="flex" gap="20px">
    <PresentationLine {...args} />
    <PresentationLine {...args} fill="red.500" />
    <PresentationLine {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
