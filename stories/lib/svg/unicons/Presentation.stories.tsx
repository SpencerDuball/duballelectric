import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Presentation, PresentationPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Presentation",
  component: Presentation,
} as ComponentMeta<typeof Presentation>;

const Template: ComponentStory<typeof Presentation> = (
  args: PresentationPropsI
) => (
  <x.div display="flex" gap="20px">
    <Presentation {...args} />
    <Presentation {...args} fill="red.500" />
    <Presentation {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
