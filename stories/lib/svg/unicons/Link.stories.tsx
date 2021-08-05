import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Link, LinkPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Link",
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args: LinkPropsI) => (
  <x.div display="flex" gap="20px">
    <Link {...args} />
    <Link {...args} fill="red.500" />
    <Link {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
