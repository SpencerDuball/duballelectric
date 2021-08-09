import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { TvRetroSlash, TvRetroSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/TvRetroSlash",
  component: TvRetroSlash,
} as ComponentMeta<typeof TvRetroSlash>;

const Template: ComponentStory<typeof TvRetroSlash> = (
  args: TvRetroSlashPropsI
) => (
  <x.div display="flex" gap="20px">
    <TvRetroSlash {...args} />
    <TvRetroSlash {...args} fill="red.500" />
    <TvRetroSlash {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
