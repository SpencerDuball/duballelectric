import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { PlayCircle, PlayCirclePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/PlayCircle",
  component: PlayCircle,
} as ComponentMeta<typeof PlayCircle>;

const Template: ComponentStory<typeof PlayCircle> = (
  args: PlayCirclePropsI
) => (
  <x.div display="flex" gap="20px">
    <PlayCircle {...args} />
    <PlayCircle {...args} fill="red.500" />
    <PlayCircle {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
